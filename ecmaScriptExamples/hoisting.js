var aNumber = 100;
tweak();

function tweak(){

    // This prints "undefined", because aNumber is also defined locally below.
    console.log(aNumber);

    if (false)
    {
        var aNumber = 123;
    }
}
