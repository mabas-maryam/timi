export default function CustomTextArea (
    {
        id = "text-field",
        placeholder = 'Type here',
        inputLabel = '',
        customClassName = '',
        required = true
    }
){

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">{inputLabel}</label>
            <textarea
                id={id}
                rows={4}
                className={`bg-gray-50 border border-gray-300 rounded-3xl text-gray-900 text-sm focus:ring-none focus:border-0 block w-full p-2.5 ${customClassName}`}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}
