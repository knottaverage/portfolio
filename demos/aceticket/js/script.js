$(document).ready(function() {

    function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
          val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
          console.log('i might be running');
        }
        return val;
    }


    function sortByPrice(a, b) {
        return $(a).find('.productPriceForSorting').text() > $(b).find('.productPriceForSorting').text();
    }

    function sortByPriceDesc(a, b) {
        return $(a).find('.productPriceForSorting').text() < $(b).find('.productPriceForSorting').text();
    }

    function sortBySection(a, b) {
        return $(a).find('.productTitleForSorting').text() > $(b).find('.productTitleForSorting').text();
    }

    function sortBySectionDesc(a, b) {
        return $(a).find('.productTitleForSorting').text() < $(b).find('.productTitleForSorting').text();
    }

    function reorderEl(el) {
        var container = $('#productList');
        container.html('');
        el.each(function() {
          $(this).appendTo(container);
        });
    }



    $('#section-desc').on('click', function() {
        reorderEl($('.productContainer').sort(sortBySectionDesc));
        $('#section-asc').show();
        $(this).hide();
    });

    $('#section-asc').on('click', function() {
        reorderEl($('.productContainer').sort(sortBySection));
        $('#section-desc').show();
        $(this).hide();
    });

    $('#price-asc').on('click', function() {
        reorderEl($('.productContainer').sort(commaSeparateNumber(sortByPrice)));
        $('#price-desc').show();
        $(this).hide();
    });

    $('#price-desc').on('click', function() {
        reorderEl($('.productContainer').sort(commaSeparateNumber(sortByPriceDesc)));
        $('#price-asc').show();
        $(this).hide();
    });


    sortByPriceDesc();
   

});