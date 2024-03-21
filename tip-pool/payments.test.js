describe('payment tests',function(){
    beforeEach(function(){

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

    });

    it('should add a new payment',function(){
        submitPaymentInfo();
        
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('create payment',function(){

        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let curTdlist = document.querySelectorAll('#paymentTable tbody tr td');

        // expect(curTdlist.length).toEqual(3);
        expect(curTdlist[0].innerText).toEqual('$100')
        expect(curTdlist[1].innerText).toEqual('$20')
        expect(curTdlist[2].innerText).toEqual('20%')
    });

    it('create new payment', function(){
        
        let newPayment = {
            billAmt:'100',
            tipAmt:'20',
            tipPercent:20,
        };
        expect(createCurPayment()).toEqual(newPayment);
       
    });


    afterEach(function(){
        billAmtInput.value= '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
})