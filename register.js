var complaintId = 0;

function addComplaint() {
    var parentNode = document.body.getElementsByClassName("complaints-container")[0];
    var cloningNode = parentNode.firstElementChild;
    var newNode = cloningNode.cloneNode(true);
    complaintId++;
    newNode.setAttribute("id", "complaint"+complaintId);
    newNode.firstElementChild.value = "";
    parentNode.appendChild(newNode);

}

function removeComplaint(element) {
    var parentNode = document.body.getElementsByClassName("complaints-container")[0];
    if (parentNode.childElementCount > 1) {
        // Only allow complaint box to be deleted if more than one are remaining 
        console.log(element.parentNode.id);
        var nodeToRemove = element.parentNode;
        nodeToRemove.remove();
    } else {
        // For the last complaint box, remove the text only
        parentNode.firstElementChild.firstElementChild.value = "";
    }
}

function relocate(url) {
    window.location.href=url;
}

function makeCollapsible () {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }
}

var remarkId = 0;
/**Adding and removing remarks in  Findings */
function addRemarks() {
    var parentNode = document.body.getElementsByClassName("remarks-container")[0];
    var cloningNode = parentNode.firstElementChild;
    var newNode = cloningNode.cloneNode(true);
    complaintId++;
    newNode.setAttribute("id", "remark"+remarkId);
    newNode.firstElementChild.value = "";
    parentNode.appendChild(newNode);

}

function removeRemarks(element) {
    var parentNode = document.body.getElementsByClassName("remarks-container")[0];
    if (parentNode.childElementCount > 1) {
        // Only allow complaint box to be deleted if more than one are remaining 
        var nodeToRemove = element.parentNode;
        nodeToRemove.remove();
    } else {
        // For the last complaint box, remove the text only
        parentNode.firstElementChild.firstElementChild.value = "";
    }
}