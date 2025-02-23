import { RootState } from "@/store";
import { SectionSizes } from "@/utils/types";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export const useLayout = () => {
    const layout = useSelector((state: RootState) => state.astSlice.props?.layout);

    const getEditorCount = useCallback(() => {
        let count = 1;

        // you can check layout

        if (
            layout === SectionSizes.oneHalf
            || layout === SectionSizes.twoThirds
            || layout === SectionSizes.twoFourth
            || layout === SectionSizes.threeFourth
        ) {
            count = 2;
        } else if (layout === SectionSizes.oneThird) {
            count = 3;
        } else if (layout === SectionSizes.oneFourth) {
            count = 4;
        }

        return count;
    }, [layout]);

    return {
        layout,
        getEditorCount
    };
}