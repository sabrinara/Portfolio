

const Title = ({ title }) => {
    return (
        <div>
            <hr className="border-1 border-dashed border-sky-500 w-2/3 md:w-1/4 mx-auto my-8"/>
            <h1 className="text-6xl font-semibold text-center italic text-sky-400  mb-4">{title}</h1>
            <hr className="border-1 border-dashed border-sky-500 w-2/3 md:w-1/4  mx-auto my-8"/>
        </div>
    );
};

export default Title;