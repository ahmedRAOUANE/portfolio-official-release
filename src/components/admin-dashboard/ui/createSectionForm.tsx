"use client";

// hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLayout } from '@/hooks/layout';

// server actions
import { create } from '@/actions/portfolio/actions';

// types
import { Descendant } from 'slate';
import { RootState } from '@/store';
import { Element, SectionSizes, Tables } from '@/utils/types';

// actions
import { openModal } from '@/store/slices/modal';
import { addInputType } from '@/store/slices/input-type';
import { addChild, setDescription, setIsActive, setLayout, setName, updateChild } from '@/store/slices/ast';

// components
import Form from '@/components/core-components/forms';
import Button from '@/components/core-components/buttons';
import Textarea from '@/components/core-components/text-area';
import Typography from '@/components/core-components/typography';
import InputField from '@/components/core-components/input-feilds';

const CreateSectionForm = () => {
    const data = useSelector((state: RootState) => state.astSlice);

    const inputTypes = useSelector((state: RootState) => state.inputTypeSlice.inputType);
    const layoutState = useSelector((state: RootState) => state.astSlice.props?.layout);

    const dispatch = useDispatch();

    const targetTable = Tables.portfolio;

    const { getEditorCount } = useLayout();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const content = {
                content: new Element("section", {
                    name: data.props?.name as string,
                    description: data.props?.description as string,
                    layout: data.props?.layout as SectionSizes,
                    isActive: data.props?.isActive as boolean
                }, [data]).toJSON()
            }

            const response = await create(targetTable, content);

            if (!response.success) {
                dispatch(openModal("error"));
            } else {
                dispatch(openModal("success"));
            };
        } catch (error) {
            console.error("Failed to create section:", error);
        }
    }

    const handleContentChange = (index: number, editorContent: Descendant[]) => {
        dispatch(updateChild({ index, content: { type: "section", props: {}, children: editorContent } }));
    }

    useEffect(() => {
        const editorCount = getEditorCount();

        if (!data || !data.children) return;

        // initialize the children inside data state
        if (data.children.length < editorCount) {
            dispatch(addChild({ type: "section", props: {}, children: [] }))
        }

        // initialize input type
        if (data.children.length < editorCount) {
            dispatch(addInputType("text"))
        }
    }, [data.children?.length, dispatch, data.children, getEditorCount, inputTypes, data]);

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

