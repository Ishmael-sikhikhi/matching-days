describe('Matching days', ()=>{
    it('It should display green if the two days are the same week day of 2021',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2021-05-02','2021-07-11')
        assert.equal('green',matchingDays_.matchTwoDay())
    })
    it('It should display green if the two days are the same week day 2021',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2021-05-03','2021-07-12')
        assert.equal('green',matchingDays_.matchTwoDay())
    })
    it('It should display green if the two days are the same week day one of 2020 and one of 2019',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2019-09-09','2021-07-12')
        assert.equal('green',matchingDays_.matchTwoDay())
    })
    describe('Different week days',()=>{
        it('It should return red if days are not of the same week day',()=>{
            let matchingDays_ = matchingDays()
            matchingDays_.setDays('2019-09-08','2021-07-12')
            assert.equal('red',matchingDays_.matchTwoDay())
        })
        it('It should return red if days are not of the same week day',()=>{
            let matchingDays_ = matchingDays()
            matchingDays_.setDays('2019-09-18','2021-07-12')
            assert.equal('red',matchingDays_.matchTwoDay())
        })
        it('It should return red if days are not of the same week day',()=>{
            let matchingDays_ = matchingDays()
            matchingDays_.setDays('2021-09-18','2021-07-12')
            assert.equal('red',matchingDays_.matchTwoDay())
        })
    })
})