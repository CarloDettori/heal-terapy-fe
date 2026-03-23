export default function Container({ children }) {
    return (
        <section className="flex flex-col gap-20 mt-30 px-5 sm:px-20  h-screen ">
            {children}
        </section>
    )
}