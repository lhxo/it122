import { expect } from "chai";
import req from "express/lib/request";

//sandwich object
const getItem = (sandwich) => {
    return {name:"Reuben", vessel:"Rye",protein:["Corned Beef"],veggie:["Sauerkrout"],dairy:["Swiss"],sauce:["Thousand Island"]}
}


describe('test deep equality', () => {
    //get sando
    it('getItem returns correct the correct sando', () => {
        let result = getItem("Reuben");
        expect(result).to.deep.equal(
            {name:"Reuben", vessel:"Rye",protein:["Corned Beef"],veggie:["Sauerkrout"],dairy:["Swiss"],sauce:["Thousand Island"]}
        )   
    });
   
    it('error - the sando was not found', () => {
        let result = sandwich.getItem("failed");
        expect(result).to.be.undefined;
      });

      //add sando
      it('addItem creates succesfully a sando', () => {
        let result = getItem(req.query.name);
        expect(result).to.deep.equal(
            {name: req.query.name, vessel : req.query.vessel, protein : req.query.protein, veggie : req.query.veggie, dairy: req.query.dairy, sauce: req.query.sauce}
        )   
    });
   
    it('error - failed to create', () => {
        let result = sandwich.addItem("failed");
        expect(result).to.be.undefined;
      });


      //delete sando
    it('deleteItem removed the sando', () => {
        let result = deleteItem("Reuben");
        expect(result).to.deep.equal(
            {name:"Reuben", vessel:"Rye",protein:["Corned Beef"],veggie:["Sauerkrout"],dairy:["Swiss"],sauce:["Thousand Island"]}
        )   
    });
   
    it('error - sando was not deleted', () => {
        let result = sandwich.deleteItem("failed");
        expect(result).to.be.undefined;
      });

});