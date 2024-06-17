const relations = {
    "Darth Vader": "father",
    "Leia": "sister",
    "Han": "brother in law",
    "R2D2": "droid",
};

function relationToLuke(name){
    const relation = relations[name] || "unknown";

    if (relation === "unknown") {
        return "Luke, I don't know you"
    } else {
        return `Luke, I am your ${relation}`
    }

}

console.log(relationToLuke("Darth Vader")) // "Luke, I am your father."
console.log(relationToLuke("Leia")) // "Luke, I am your sister."
console.log(relationToLuke("Han")) // "Luke, I am your brother in law."
console.log(relationToLuke("han")) // "Luke, I am your brother in law."