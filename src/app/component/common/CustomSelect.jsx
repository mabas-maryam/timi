export default function CustomSelect (
    {
        id = "text-field",
        inputLabel = '',
        customClassName = '',
        required = true
    }
){

    return (
        <>
            {
                inputLabel !== "" ? (<label className="block mb-2 text-sm font-medium text-gray-900">{inputLabel}</label>) : <></>
            }
            <select
                id={id}
                required={required}
                className={`bg-gray-50 border border-gray-300 rounded-3xl text-gray-900 text-sm focus:ring-none focus:border-0 block w-full p-2.5 ${customClassName}`}
            >
                <option selected>Category</option>
            </select>
        </>
    );
}
