$(document).ready(function(){
    // Vô hiệu hóa ô phép tính
    $('.box-calculation').attr('disabled', 'true');

    // Vô hiệu hóa ô kết quả
    $('.box-result').attr('disabled', 'true');

    // Vô hiệu hóa nút nhân
    $('.box-button button.times').attr('disabled', 'true');

    // Vô hiệu hóa nút chia
    $('.box-button button.devide').attr('disabled', 'true');

    // Vô hiệu hóa nút bằng
    $('.box-button button.equal').attr('disabled','true');


    // Xử lý khi click vào các nút số
    $('.box-button button.number').on('click', function(){
        // Lấy số vừa click
        $char = $(this).html();

        // Lấy chuỗi giá trị trong ô phép tính
        $value_calculation = $('.box-calculation').val();

        // Thêm số vừa click vào sau chuỗi giá trị trong ô phép tính
        $('.box-calculation').val($value_calculation + $char);

        // Gỡ bỏ vô hiệu hóa các nút phép toán
        $('.box-button button.operation').removeAttr('disabled');

        // Gỡ bỏ vô hiệu hóa nút bằng
        $('.box-button button.equal').removeAttr('disabled');
    });


    // Xử lý nút chấm
    $('.box-button button.dot').on('click', function(){
        // Lấy dấu chấm
        $char = $(this).html();

        // Lấy chuỗi giá trị trong ô phép tính
        $value_calculation = $('.box-calculation').val();

        // Thêm dấu chấm vào sau chuỗi giá trị trong ô phép tính
        $('.box-calculation').val($value_calculation + $char);

        // Vô hiệu hóa các nút phép toán
        $('.box-button button.operation').attr('disabled', 'true');

        // Vô hiệu hóa nút dấu chấm
        // Không thể nào mà có nhiều dấu chấm lặp lại liên tiếp nên khi click vào nút dấu chấm thì tự vô hiệu hoá nó luôn
        $('.box-button button.dot').attr('disabled', 'true');
    });

    // Xử lý nút CE - Refresh
    $('.box-button button.refresh').on('click', function(){
        // Làm trống ô phép tính và ô kết quả
        $('.box-calculation').val('');
        $('.box-result').val('');
    });

    // Xử lý nút Del
    $('.box-button button.del').on('click', function(){
        $string = $('.box-calculation').val();
        $('.box-calculation').val($string.substring(0, $string.length-1));
    });

    // Xử lý các phép toán
    $('.box-button button.operation').on('click', function(){
        // Lấy dấu phép toán vừa click
        $char = $(this).html();

        // Lấy chuỗi giá trị trong ô phép tính
        $value_calculation = $('.box-calculation').val();

        // Thêm dấu phép toán vào
        $('.box-calculation').val($value_calculation + $char);

        // Vô hiệu hóa nút nhân
        $('.box-button button.times').attr('disabled', 'true');

        // Vô hiệu hóa nút chia
        $('.box-button button.devide').attr('disabled', 'true');

        // Gỡ bỏ vô hiệu hóa nút dấu chấm
        $('.box-button button.dot').removeAttr('disabled');
    });


    // Xử lý nút dấu bằng
    $('.box-button button.equal').on('click', function(){
        // Lấy chuỗi giá trị trong ô tính toán
        $result = $('.box-calculation').val();

        // Hiển thị kết quả trong ô giá trị
        $('.box-result').val(eval($result));
    });


    
});