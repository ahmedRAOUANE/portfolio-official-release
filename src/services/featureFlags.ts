import { FEATURE_FLAGS } from "@/lib/featureFlags.config";
import { createClient } from "../lib/supabase/server";

export class FeatureFlagService {
    private static instance: FeatureFlagService;
    private flags: Record<string, boolean> = {};

    private constructor() { }

    public static async getInstance(): Promise<FeatureFlagService> {
        if (!FeatureFlagService.instance) {
            FeatureFlagService.instance = new FeatureFlagService();
            await FeatureFlagService.instance.syncFlags(); // Sync flags on initialization
            await FeatureFlagService.instance.loadFlags();
        }
        return FeatureFlagService.instance;
    }

    private async syncFlags() {
        const supabase = await createClient();

        // Fetch existing flags from the database
        const { data: existingFlags, error: fetchError } = await supabase
            .from('feature-flags')
            .select('name');

        if (fetchError) {
            console.error('Failed to fetch existing flags: ', fetchError);
            return;
        }

        const existingFlagNames = existingFlags.map((flag) => flag.name);

        // Add missing flags to the database
        for (const flag of Object.values(FEATURE_FLAGS)) {
            if (!existingFlagNames.includes(flag.name)) {
                const { error: insertError } = await supabase
                    .from('feature-flags')
                    .insert([{ name: flag.name, isEnabled: flag.defaultValue }]);

                if (insertError) {
                    console.error(`Failed to add flag "${flag.name}" to the database:`, insertError);
                }
            }
        }
    }

    private async loadFlags() {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from('feature-flags')
            .select('name, isEnabled');

        if (error) {
            console.error('Failed to load feature flags:', error);
            return;
        }

        this.flags = data.reduce((acc, flag) => {
            acc[flag.name] = flag.isEnabled;
            return acc;
        }, {} as Record<string, boolean>);
    }

    public isEnabled(flag: keyof typeof FEATURE_FLAGS): boolean {
        return this.flags[FEATURE_FLAGS[flag].name] || false;
    }
}

