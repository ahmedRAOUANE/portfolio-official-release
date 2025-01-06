import LogoutBtn from "@/components/logout-btn"
import { FeatureFlagService } from "@/services/featureFlags";

const AdminLoginPage = async () => {
    const flags = await FeatureFlagService.getInstance();
    const isNewFeatureEnabled = flags.isEnabled("newFeature");

    console.log("flags: ", flags)
    console.log("isNewFeatureEnabled: ", isNewFeatureEnabled)

    // other html code...

    return (
        <main className='flex justify-center items-center h-screen'>
            <div className="w-full md:w-1/2 p-4">
                <div className="flex justify-between">
                    <h1>Admin Page</h1>

                    <LogoutBtn />
                </div>
            </div>
        </main>
    )
}

export default AdminLoginPage