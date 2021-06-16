describe('Matching days', ()=>{
    it('It should display green if the two days are the same week day of year 2021',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2021-05-02','2021-07-11')
        assert.equal('green',matchingDays_.matchTwoDay())
    })
    it('It should display green if the two days are the same week day of year 2021',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2021-05-03','2021-07-12')
        assert.equal('green',matchingDays_.matchTwoDay())
    })
    it('It should display green if the two days are the same week day one of year 2020 and one of year 2019',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2019-09-09','2021-07-12')
        assert.equal('green',matchingDays_.matchTwoDay())
    })//
    it('It should return Sunday if the two days are both Sunday',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2021-05-02','2021-07-11')
        assert.deepEqual('Sunday',matchingDays_.notMatch())
    })
    it('It should return Monday  if the two days are both Monday',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2021-05-03','2021-07-12')
        assert.deepEqual('Monday',matchingDays_.notMatch())
    })
    it('It should return Tuesday if the two days are both Tuesday',()=>{
        let matchingDays_ = matchingDays()
        matchingDays_.setDays('2019-09-10','2021-07-13')
        assert.deepEqual('Tuesday',matchingDays_.notMatch())
    })
    describe('Different week days',()=>{
        it('It should return red if days are not of the same week day and day 2 appeared first',()=>{
            let matchingDays_ = matchingDays()
            matchingDays_.setDays('2019-09-08','2021-07-12')
            assert.equal('red',matchingDays_.matchTwoDay())
        })
        it('It should return Monday if days are not of the same week day and first day is Monday',()=>{
            let matchingDays_ = matchingDays()
            matchingDays_.setDays('2021-09-18','2021-07-12')   
            assert.deepEqual('Monday',matchingDays_.notMatch())
        })
        it('It should return yellow if days are not of the same week day and day 1 appeared first',()=>{
            let matchingDays_ = matchingDays()
            matchingDays_.setDays('2021-09-18','2021-07-12')            
            assert.equal('yellow',matchingDays_.matchTwoDay())
        })
        it('It should return Tuesday if days are not of the same week day and first day is Tuesday',()=>{
            let matchingDays_ = matchingDays()
            matchingDays_.setDays('2021-09-18','2021-07-13') 
            assert.deepEqual('Tuesday',matchingDays_.notMatch())
        })
    })
})