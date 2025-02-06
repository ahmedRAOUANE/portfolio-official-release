import ProgressMessage from "./modals/progress-message";

const RenderModalContent = ({window}: {window: string}) => {
    switch (window) {
        case "success":
            return <ProgressMessage success message="Successfully created section" />;
        case "error":
            return <ProgressMessage message="Failed to create section" />;
        default:
            return null;
    }
}

export default RenderModalContent;