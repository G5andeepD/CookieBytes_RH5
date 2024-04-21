export function CreateRisk() {
    function formSubmit(e) {
        e.preventDefault();
    }

    return (

        <form onSubmit={formSubmit} className="flex flex-col gap-y-3 gap-x-3 content-center p-6 ">
            <h1 className="text-3xl font-bold">Create Risk</h1>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Risk Name</span>
                </div>
                <input name="firstName" type="text" placeholder="Risk!" className="input input-primary input-bordered w-full max-w-xs" />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Risk Details</span>
                </div>
                <textarea className="textarea textarea-primary" placeholder="Details"></textarea>
            </label>
        </form>
    )
}