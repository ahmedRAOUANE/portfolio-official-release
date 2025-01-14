
// component
import Button from '@/components/core-components/buttons'
import Container from '@/components/core-components/container'
import Form from '@/components/core-components/forms'
import InputField from '@/components/core-components/input-feilds'
import Section from '@/components/core-components/section'
import Textarea from '@/components/core-components/text-area'
import Typography from '@/components/core-components/typography'

// icons
import { MdEdit } from 'react-icons/md'

const ComponentsControlCenter = () => {
    return (
        <Container variant='main' className='container p-5 flex flex-col gap-20'>
            <Container variant='section' className='flex flex-col gap-5 p-10'>
                <Typography variant='h1' className='text-4xl font-bold'>Components Control Center</Typography>

                <Typography variant='p' className='text-2xl'>Here you can manage header</Typography>
            </Container>

            <Container variant='section'>
                <Section className='flex justify-between items-center'>
                    <Typography variant='h2' className='text-2xl mb-3'>Core Components</Typography>

                    {/* <Button className='text-3xl'>
                        <MdEdit />
                    </Button> */}
                </Section>

                {/* <ul className='flex gap-3'>
                    {headerLinks.map((link, idx) => (
                        <li key={idx} className='flex'>
                            <Link href={`/admin/header/${link.id}`} className='p-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 shadow outline-2'>{link.name}</Link>
                        </li>
                    ))}
                </ul> */}
            </Container>

            <Container variant='section'>
                <Section className='flex justify-between items-center'>
                    <Typography variant='h2' className='text-2xl mb-3'>Created Components</Typography>

                    <Button className='text-3xl'>
                        <MdEdit />
                    </Button>
                </Section>

                {/* <ul className='flex gap-3'>
                    {headerLinks.map((link, idx) => (
                        <li key={idx} className='flex'>
                            <Link href={`/admin/header/${link.id}`} className='p-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 shadow outline-2'>{link.name}</Link>
                        </li>
                    ))}
                </ul> */}
            </Container>

            <Container variant='section'>
                <Typography variant='h2' className='text-2xl mb-3'>Add New Component</Typography>

                <Form
                    action={async () => {
                        "use server"
                        console.log("something")
                    }}
                    className='flex flex-col gap-3'
                >
                    <InputField required className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="name" id="name" placeholder='name' />
                    <InputField required className='px-4 py-2 rounded-lg bg-white outline-1 shadow-md' type="text" name="description" id="description" placeholder='description' />
                    <Textarea />

                    <InputField className='flex gap-3 p-3' type="checkbox" name="isActive" id="isActive" label='is Active' />

                    <Button type="submit" className='px-4 py-2 rounded-lg bg-black text-white shadow-md'>Submit</Button>
                </Form>
            </Container>
        </Container>
    )
}

export default ComponentsControlCenter