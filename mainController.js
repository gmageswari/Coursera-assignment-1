app.controller("LunchCheckController",function($scope){
    $scope.itemList = "";
    $scope.splitItems = function(){
        if($scope.itemList === ""){
            $scope.msg = "Please enter data first";
            return;
        }
        let items = $scope.itemList.split(',');
        var numberOfItems = 0;
        for(let i=0 ; i < items.length ; i++){
            if(items[i] !== ""){
                numberOfItems += 1;
            }
        }
        console.log(numberOfItems);
        if(numberOfItems === 0){
            $scope.msg = "Please enter data first";
            return;
        }
        if(numberOfItems <= 3){
             $scope.msg = "Enjoy!";
             return;
        }
        if(numberOfItems > 3){
            $scope.msg = "Too much!";
            return;
        }
    };
});