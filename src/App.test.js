

test(
    "Test 1 when tested",
    () => {
        console.log("running the test");
        throw new Error("This is an error.");
    }
);

test("Test 2 when tested", ()=> {
    console.log("running the test");
})

test("Test 3 when tested", ()=> {
    console.log("running the test");
})

test("Test 4 when tested", ()=> {
    console.log("running the test");
})