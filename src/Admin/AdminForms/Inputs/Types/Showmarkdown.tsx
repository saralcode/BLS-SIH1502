import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export default function ShowMarkdown({ data }: { data: string }) {
    return <div className='rounded-md' > <ReactMarkdown remarkPlugins={[remarkGfm]} >{data}</ReactMarkdown></div>


}