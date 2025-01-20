// server actions
import { createHeaderLink, getHeaderLinks } from '@/actions/portfolio/header-actions';

// components
import Link from 'next/link';
import Form from '@/components/core-components/forms';
import Button from '@/components/core-components/buttons';
import Section from '@/components/core-components/section';
import Container from '@/components/core-components/container';
import Typography from '@/components/core-components/typography';
import InputField from '@/components/core-components/input-feilds';

// icons
import { MdEdit } from 'react-icons/md';
import { getAll } from '@/actions/portfolio/actions';
import { Tables } from '@/utils/types';

const HeaderConterolCenter = async () => {
    const headerLinks = await getAll(Tables.headerLinks);

    return (
        <Container variant="main" className='container p-5 flex flex-col gap-20'>
            <Container variant='section' className='flex flex-col gap-5 p-10'>
                <Typography variant='h1' className='text-4xl font-bold'>Header Control Center</Typography>

                <Typography className='text-2xl'>Here you can manage header</Typography>
            </Container>

            <Container variant='section' >
                <Section className='flex justify-between items-center'>
                    <Typography variant='h2' className='text-2xl mb-3'>Created Links</Typography>

                    <Button className='text-3xl'>
                        <MdEdit />
                    </Button>
                </Section>

                <ul className='flex gap-3'>
                    {headerLinks.map((link, idx) => (
                        <li key={idx} className='flex'>
                            <Link href={`/admin/header/${link.id}`} className='p-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 shadow outline-2'>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </Container>

            <Container variant='section' >
                <Typography variant='h2' className='text-2xl mb-3'>Add New Link</Typography>

                <Form action={createHeaderLink} className='flex flex-col gap-3'>
                    <InputField className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="name" id="name" placeholder='name' />
                    <InputField className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="description" id="description" placeholder='description' />
                    <InputField className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="href" id="href" placeholder='href' />
                    <InputField className='px-4 py-2 flex items-center gap-2' type="checkbox" name="isActive" id="isActive" label='is Active' />

                    <Button type="submit" className='px-4 py-2 rounded-lg bg-black text-white shadow-md'>Submit</Button>
                </Form>
            </Container>
        </Container>
    )
}

export default HeaderConterolCenter