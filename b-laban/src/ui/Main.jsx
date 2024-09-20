function Main({ children }) {
    return (
        <div className="overflow-y-scroll">
            <main>{children}</main>;
        </div>
    );
}

export default Main;
