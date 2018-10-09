const MyToken = artifacts.require('MyToken');
const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('MyToken', accounts => {
    const _name = "My Token";
    const _symbol = "MTK";
    const _decimals = 18;
    
    beforeEach(async () =>{
        this.token = await MyToken.new(_name, _symbol, _decimals)
    });

    describe('token attributes', () => {
        it('has the correct name', async () => {
            const name = await this.token.name();
            name.should.equal(_name);
        })

        it('has the correct symbol', async ()=> {
            const symbol = await this.token.symbol();
            symbol.should.equal(_symbol);
        });

        it('has the correct decimals', async () => {
            const decimals = await this.token.decimals();
            console.log('--NUM',   decimals.toNumber())
            // decimals.toNumber().should.equal(_decimals);
            //or
            decimals.should.be.bignumber.equal(_decimals); //setup at file top
        })
    })
})