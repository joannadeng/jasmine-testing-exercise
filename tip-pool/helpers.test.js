describe('helpers test',function(){
    
    it ('culculate tip percentage',function(){
        let curPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
          }
        expect(calculateTipPercent(curPayment['billAmt'],curPayment['tipAmt'])).toEqual(20);
    })

    it ('sum payment total',function(){
        let curPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
          }
          allPayments[0]=curPayment;
          expect(sumPaymentTotal('billAmt')).toEqual(100);
          expect(sumPaymentTotal('tipAmt')).toEqual(20);
          expect(sumPaymentTotal('tipPercent')).toEqual(20);
        
    })

    afterEach(function(){
        allPayments={};
    })

})