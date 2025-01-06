interface FeatureFlagType {
    [key: string]: { name: string, defaultValue: boolean }
}

export const FEATURE_FLAGS: FeatureFlagType = {
    newFeature: { name: "new-feature", defaultValue: false },
    betaFeature: { name: "beta-feature", defaultValue: false },
    otherNewFeature: { name: "other-new-feature", defaultValue: true }
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;

