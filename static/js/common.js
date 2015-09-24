/**
 * Created by alexy on 28.05.15.
 */
$(function() {
  $.validator.messages.required = "* поле обязательно для заполнения";

  //$( ".ticket-form form" ).validate({
  //  rules: {
  //    name: {
  //      required: true
  //    },
  //    phone: {
  //      required: true
  //    },
  //    email: {
  //      required: true
  //    },
  //  },
  //  submitHandler: function(e) {
  //    $('.ticket-form form').ajaxSubmit({
  //        success: function(data){
  //          if (data.success) {
  //            $.notify('Ваша заявка принята!', 'success');
  //          } else {
  //            $.notify('Что то пошло не так', 'error');
  //          }
  //          $('form').trigger('reset');
  //        }
  //    });
  //  }
  //});

  $(".js-certificate").fancybox();

  $(document).on('click', 'a[href^=#]', function () {
    $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 300 );
    return false;
  });

});