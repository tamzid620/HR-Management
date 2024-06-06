

const Loading = () => {

    return (
        <div className="flex justify-center items-center bg-[#25476a] opacity-50 h-screen">
        <div className="text-center">
<span className="loading loading-spinner text-white w-[80px] mb-7"></span>
<h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
	<p className="text-center text-white ">This may take a few seconds, please don't close this page.</p>
        </div>
        </div>
    );
};

export default Loading;
