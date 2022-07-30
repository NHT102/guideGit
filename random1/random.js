document.getElementById('random').onclick = () => {
    let x = Math.floor((Math.random() * 4) + 1);

    switch (x) {
        case 1:
            document.getElementsByTagName('h3')[0]
                .innerText = 'Trương Thị Quỳnh Anh'
            break;
        case 2:
            document.getElementsByTagName('h3')[0]
                .innerText = 'Nguyễn Hữu Tiến'
            break;
        case 3:
            document.getElementsByTagName('h3')[0]
                .innerText = 'Bùi Lê Minh'
            break;
        case 4:
            document.getElementsByTagName('h3')[0]
                .innerText = 'Văn Phú Đạt'
            break;
    }
    return;
}





