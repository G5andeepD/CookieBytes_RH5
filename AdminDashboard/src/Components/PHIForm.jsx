
export default function PHIForm() {
    function formSubmit(e) {
        e.preventDefault()

    }
    return (
        <form onSubmit={formSubmit} className="flex flex-col gap-y-3 gap-x-3 content-center p-6 ">
            <h1 className="text-3xl font-bold">Create PHI</h1>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Name</span>
                </div>
                <input name="name" type="text" placeholder="Name of Doctor" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input name="email" type="email" placeholder="phi@gmail.com" className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">PHI Number</span>
                </div>
                <input name="email" type="text" placeholder="PHI-No" className="input input-bordered w-full max-w-xs" />
            </label>
            <button className="btn btn-wide" type="submit">Create</button>
        </form>
    )

}