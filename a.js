function validationfunc()
{
    let name=document.getElementById('name').value;
    let Email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let message=document.getElementById('message').value;

    if(!name)
    {
        alert('Enter name');
    }

    if(!Email)
    {
        alert('Enter email');
    }

    if(!phone)
    {
        alert('Enter phone number');
    }

    if(!message)
    {
        alert('Enter message');
    }
    else
    {
        alert('Form submitted');
    }
}