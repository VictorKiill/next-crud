export default function Title(props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="pl-5 py-2 text-2xl font-bold">
                {props.children}
            </h1>
            <hr className="border-2 border-blue-400"/>
        </div>
    )
}