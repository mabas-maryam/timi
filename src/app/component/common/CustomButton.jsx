export default function CustomButton ({ text, btnClassName = '' }){

    return (
        <button className={`px-6 w-full h-fit rounded-3xl font-semibold py-2 text-center text-base text-white ${btnClassName}`}>
            {text}
        </button>
    )
}
