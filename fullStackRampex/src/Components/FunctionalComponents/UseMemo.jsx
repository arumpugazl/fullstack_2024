var UseMemo = () => {
    return (
        <section>
            <h1>The useMemo Hook returns a memoized value and prevents the application from unnecessary re-renders. It is useful in heavy computations and processes when using functional components. The useMemo hook helps optimize performance by memoizing expensive calculations.</h1>
            <h1>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) useMemo(calculateValue, dependencies)
            </h1>
        </section>
    )

}
export default UseMemo;