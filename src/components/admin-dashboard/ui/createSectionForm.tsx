"use client";

import Form from '@/components/core-components/forms';
import Button from '@/components/core-components/buttons';
import Textarea from '@/components/core-components/text-area';
import Typography from '@/components/core-components/typography';
import InputField from '@/components/core-components/input-feilds';
import { useDispatch } from 'react-redux';
import { setDescription, setEditorContent, setIsActive, setLayout, setName, updateEditorContent } from '@/store/slices/data';
import { ChildType, SectionSizes, Tables } from '@/utils/types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { create } from '@/actions/portfolio/actions';
import { useCallback, useEffect } from 'react';
import { Descendant } from 'slate';
import { setInputType } from '@/store/slices/input-type';

const CreateSectionForm = () => {
    const data = useSelector((state: RootState) => state.dataSlice);

    const layoutState = useSelector((state: RootState) => state.dataSlice.layout);
    const inputTypes = useSelector((state: RootState) => state.inputTypeSlice.inputType);

    const dispatch = useDispatch();

    const targetTable = Tables.sections;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("data: ", data);
        console.log("data submitted..");
        // TODO: submit data
        // const formData = new FormData(e.currentTarget);
        await create(targetTable, data)
    }

    const handleContentChange = (index: number, editorContent: Descendant[]) => {
        dispatch(updateEditorContent({ index, content: editorContent }));
    }

    const getEditorCount = useCallback(() => {
        let count = 1;
        if (
            layoutState === SectionSizes.oneHalf
            || layoutState === SectionSizes.twoThirds
            || layoutState === SectionSizes.twoFourth
            || layoutState === SectionSizes.threeFourth
        ) {
            count = 2;
        } else if (layoutState === SectionSizes.oneThird) {
            count = 3;
        } else if (layoutState === SectionSizes.oneFourth) {
            count = 4;
        }

        return count;
    }, [layoutState]);

    useEffect(() => {
        const editorCount = getEditorCount();

        // initialize the children inside data state
        if (data.children.length < editorCount) {
            const newChildren: ChildType[] = Array.from({ length: editorCount }, (_, idx) => (
                {
                    childId: `child-${idx}`,
                    className: "",
                    children: data.children[idx]?.children || [] // preserve existing content if available
                }
            ));
            dispatch(setEditorContent(newChildren))
        }

        // !this is for the next feature
        // initialize input type
        if (data.children.length < editorCount) {
            const newInputType = Array.from({ length: editorCount }, (_, idx) => inputTypes[idx] || "text")
            //     // dispatch(updateInputType(newInputType))

            dispatch(setInputType(newInputType))
        }
    }, [layoutState, data.children.length, dispatch, data.children, getEditorCount, inputTypes]);

    const renderEditor = () => {
        const editorCount = getEditorCount();

        return Array.from({ length: editorCount }, (_, index) => (
            <Textarea
                index={index}
                key={index}
                onEditorChange={(editorContent) => handleContentChange(index, editorContent)}
            />
        ));
    }

    return (
        <Form
            onSubmit={handleSubmit}
            className='flex flex-col gap-3'
        >
            <InputField
                autoComplete="on"
                required
                className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md'
                type="text" name="name" id="name" placeholder='name'
                onChange={(e) => dispatch(setName(e.target.value))}
            />
            <InputField
                autoComplete="on"
                required
                className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md'
                type="text" name="description" id="description" placeholder='description'
                onChange={(e) => dispatch(setDescription(e.target.value))}
            />

            <Typography variant='h3' className='text-xl text-gray-500'>Content</Typography>

            <label htmlFor="layout" className='cursor-pointer'>
                <Typography>Layout</Typography>

                <select id='layout' name='layout'
                    onChange={(e) => dispatch(setLayout(e.target.value as SectionSizes))}
                    defaultValue={layoutState}
                    className='cursor-pointer'
                >
                    <option value={SectionSizes.full}>full</option>
                    <option value={SectionSizes.oneHalf}>one half</option>
                    <option value={SectionSizes.oneThird}>one third</option>
                    <option value={SectionSizes.twoThirds}>tow third</option>
                    <option value={SectionSizes.oneFourth}>one fourth</option>
                    <option value={SectionSizes.twoFourth}>tow fourth</option>
                    <option value={SectionSizes.threeFourth}>threeFourth</option>
                </select>
            </label>

            <div className={`w-full flex flex-wrap justify-start items-start gap-3`}>
                {renderEditor()}
                {/* <Textarea onEditorChange={(editorContent) => handleContentChange(editorContent)} /> --> tryed this tow but it doesn't work? */}
                {/* <Textarea onEditorChange={(editorContent) => handleContentChange(editorContent)} />
                <Textarea onEditorChange={(editorContent) => handleContentChange(editorContent)} />
                <Textarea onEditorChange={(editorContent) => handleContentChange(editorContent)} /> */}
            </div>

            <InputField
                autoComplete="on"
                className='flex gap-3 p-3'
                type="checkbox" name="isActive" id="isActive" label='is Active'
                onChange={(e) => {
                    if (e.target instanceof HTMLInputElement) {
                        dispatch(setIsActive(e.target.checked));
                    }
                }}
                defaultChecked
            />

            <Button type="submit" className='px-4 py-2 rounded-lg bg-black text-white shadow-md'>Submit</Button>
        </Form>
    )
}

export default CreateSectionForm

