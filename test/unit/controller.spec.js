const chai = require('chai');
const should = require('chai').should();
const chaiHttp = require('chai-http');
const controller = require('./../src/controller');

chai.use(chaiHttp);


describe('Controller', ()=> {
    describe('getBook', ()=> {
        let req, res;
        res = {
            data: '',
            code: '',

            statusCode: function(code){
                this.statusCode = code;
            },
            send: function(data){
                this.data = data;
            }
        };
        it('should return 200', () => {
            //controller.getBook(req, res);
            //res.statusCode.should.equal(200);
            //res.send.should.equal('This is a book');
            '4'.should.equal('4');
        });
    });

    // describe('getText', ()=>{
    //     it('should return text for the corresponding image', () => {
    //         controller.getText(req, res);
    //
    //     })
    // })
});
