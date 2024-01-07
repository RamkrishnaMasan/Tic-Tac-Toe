$(document).ready(function(){
    let board = ['','','','','','','','',''];
    let turn = 'X';
    let cells = $('.cell');

    cells.on('click', function(){
        let pos = $(this).data('pos');
        if(board[pos] === '') {
            $(this).text(turn);
            board[pos] = turn;
            turn = turn === 'X' ? 'O' : 'X';
        }
    });

    $('#reset').on('click', function(){
        cells.text('');
        board = ['','','','','','','','',''];
        turn = 'X';
    });
});