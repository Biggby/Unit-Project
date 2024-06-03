const baseUrl = 'https://664d452eede9a2b55653126b.mockapi.io/api/school';

function manageUsers() {
    return {
        url: `${baseUrl}`,  // Define the base URL or any necessary URL

        allUsers: function() {
            let url = `${this.url}/users`;
            console.log('Grabbing all users...');
            return $.ajax(url, {
                success: (data) => {
                    return data;
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.error('Error fetching users:', textStatus, errorThrown);
                }
            });
        },
        addUsers: function() {
            let url = `${this.url}/users`;
            console.log('Adding a user...');
            $.ajax({
                type: 'POST',
                // make sure you respect the same origin policy with this url:
                // http://en.wikipedia.org/wiki/Same_origin_policy
                url: url,
                data: { 
                    'avatar': 'avatar', 
                    'createdAt': 'createdAt',  // Fixed typo: 'createdAT' to 'createdAt'
                    'id': 'id',
                    'name': 'name'
                },
                success: function(msg) {
                    alert('wow ' + msg);
                }
            });
        },
        removeUsers: function() {
            let url = `${this.url}/users/id`;  // Directly include the placeholder
            console.log('Removing a user...');
            $.ajax({
                type: 'DELETE',
                // make sure you respect the same origin policy with this url:
                // http://en.wikipedia.org/wiki/Same_origin_policy
                url: url,
                success: function(msg) {
                    console.log('User removed:', msg);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Error removing user:', textStatus, errorThrown);
                }
            });
        },
        getUser: function() {
            let url = `${this.url}/users/`;
            console.log('Grabbing user data...');
            return $.ajax(url, {
                success: (data) => {
                    return data;
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.error('Error fetching user data:', textStatus, errorThrown);
                }
            });
        },
        updateUserInfo: function() {
            let url = `${this.url}/users/2`;
            console.log('Updating user...');
            $.ajax({
                type: 'PUT',
                // make sure you respect the same origin policy with this url:
                // http://en.wikipedia.org/wiki/Same_origin_policy
                url: url,
                data: JSON.stringify({
                    'avatar': 'avatar', 
                    'createdAt': 'createdAt',  // Fixed typo: 'createdAT' to 'createdAt'
                    'id': 'id',
                    'name': 'name'
                }),
                contentType: 'application/json',  // Ensuring the content type is JSON
                success: function(msg) {
                    console.log('User updated successfully:', msg);
                },
                error: function(xhr, status, error) {
                    console.error('Error updating user:', status, error);
                }
            });
        }
    };
}

const userManager = manageUsers();
    userManager.updateUserInfo().then(data => {
        console.log('All users data:', data);
    }).catch(error => {
        console.error('Failed to fetch users:', error)
    });




/*
GET
/users
$mockData
$mockData

GET
/users/:id
$mockData
$mockData

POST
/users
$mockData
$mockData



PUT
/users/:id
$mockData
$mockData

DELETE
/users/:id
*/
