export default function MyCustomCard({image, title}:{image?:string, title?:string}){
    return <div className="rounded-md shadow-md">
        {image && <img/> }
        {title && <h3>{title}</h3>}
    </div>
}