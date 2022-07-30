document.getElementById('random').onclick = () => {
    let x = Math.floor((Math.random() * 4) + 1);


    //     if (x === 1) {
    //         // document.getElementsByTagName('h3')[0]
    //         //     .innerText = x
    //         document.getElementsByTagName('h4')[0]
    //             .innerText = 'Nguyễn Hữu Tiến'
    //         return;
    //     }
    //     if (x === 2) {
    //         // document.getElementsByTagName('h3')[0]
    //         //     .innerText = x
    //         document.getElementsByTagName('h4')[0]
    //             .innerText = 'Trương Thị Quỳnh Anh'
    //         return;
    //     }
    //     if (x === 3) {
    //         // document.getElementsByTagName('h3')[0]
    //         //     .innerText = x
    //         document.getElementsByTagName('h4')[0]
    //             .innerText = 'Bùi Lê Minh'
    //         return;
    //     }
    //     else {
    //         // document.getElementsByTagName('h3')[0]
    //         //     .innerText = x
    //         document.getElementsByTagName('h4')[0]
    //             .innerText = 'Văn Phú Đạt'
    //         return;
    //     }
    // }



    // const nameUser = prompt('Xin mời nhập tên');
    // console.log('nameUser');

    //     switch (x) {
    //         case 1:
    //             document.write('Anh');
    //             break;
    //         case 2:
    //             document.write('Tiến');
    //             break;
    //         case 3:
    //             document.write('Đạt');
    //             break;
    //         case 4:
    //             document.write('Minh');
    //             break;
    //     }
    // }











    switch (x) {
        case 1:
            document.getElementsByTagName('h3')[0]
                .innerText = 'Anh'
            break;
        case 2:
            document.getElementsByTagName('h3')[0]
                .innerText = 'Tiến'
            break;
        case 3:
            document.getElementsByTagName('h3')[0]
                .innerText = 'Minh'
            break;
        case 4:
            document.getElementsByTagName('h3')[0]
                .innerText = 'Đạt'
            break;
    }
    return;
}





