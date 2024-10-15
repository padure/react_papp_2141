const Main = () => {
    const colors = [
        'Red', 'Blue', 'Yellow', 'Orange', 'Pink'
    ];
    const listColors = colors.map((color, i) => <li key={i}>{color}</li>);
    return (
        <ol>{listColors}</ol>
    );
}

export default Main;