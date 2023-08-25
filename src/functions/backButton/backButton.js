export const changeBackButton = (setBackButton) => {
    const address = window.location.href.split("/");
    if (!address[3]) {
        setBackButton(false);
    } else {
        setBackButton(true);
    }
};

export const letsGoBack = (setBackAddress) => {
    let backAddress = window.location.href.split("/");
    backAddress = backAddress.slice(3);
    if (backAddress.length > 0) {
        backAddress.pop();
    } else {
        backAddress[0] = " ";
    }
    backAddress = backAddress
        .map((value) => {
            return "/" + value;
        })
        .join("");
    setBackAddress(backAddress);
};
