import { getSingle, update } from '@/actions/portfolio/actions';

// components
import Link from 'next/link';
import Form from '@/components/core-components/forms';
import Button from '@/components/core-components/buttons';
import Section from '@/components/core-components/section';
import Container from '@/components/core-components/container';
import Typography from '@/components/core-components/typography';
import InputField from '@/components/core-components/input-feilds';

// icons
import { FaArrowLeft } from 'react-icons/fa';
import { Tables } from '@/utils/types';

const EditLink = async ({ params }: { params: Promise<{ linkId: string }> }) => {
    const { linkId } = await params;
    const targetTable = Tables.headerLinks;
    const { name, url, description, isVisible } = await getSingle(targetTable, linkId);

    const handleUpdate = async (data: FormData) => {
        "use server";

        await update(targetTable, linkId, data);
        // await redirect("admin/header")
    }

    return (
        <Container variant='main' className='container p-5 flex flex-col gap-20'>
            <Container variant='section' className='flex flex-col gap-5 p-10'>
                <Section className='flex items-center justify-start gap-4 '>
                    <Link href={"/admin/header"} className='text-3xl'>
                        <FaArrowLeft />
                    </Link>

                    <Typography variant='h1' className='text-4xl font-bold'>Edit Link</Typography>
                </Section>

                <Typography className='text-2xl'>Here you can edit link</Typography>
            </Container>

            <Container variant='section'>
                <Typography variant='h2' className='text-2xl mb-3'>Update the {name} Lnik</Typography>

                <Form action={handleUpdate} className='flex flex-col gap-3'>
                    <InputField defaultValue={name} className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="name" id="name" placeholder='name' />
                    <InputField defaultValue={description} className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="description" id="description" placeholder='description' />
                    <InputField defaultValue={url} className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="href" id="href" placeholder='href' />
                    <InputField className='px-4 py-2 flex items-center gap-2' type="checkbox" defaultChecked={isVisible} name="isActive" id="isActive" label='is Active' />

                    <Button type="submit" className='px-4 py-2 rounded-lg bg-black text-white shadow-md'>Submit</Button>
                </Form>
            </Container>
        </Container>
    )
}

export default EditLink