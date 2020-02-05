# Assignment_Miro

- Demo: https://miro-assignment.herokuapp.com/

- How to use
	1. download the built verison ([dist/emails-editor.js](https://github.com/ethan-cao/Assignment_Miro/blob/master/dist/emails-editor.js "emails-editor.js"))
	2. include the script to load EmailsEditor and set a container in DOM like the code snippet below
			
			<div id="emails-editor"></div>
			<script src="emails-editor.js"></script>
			<script>
			// EmailsEditor will be added in the container
    		const container = document.querySelector("#emails-editor");
			
			// options contains the name of the board and emails to display
			const options1 = {
				boardName: "Board name",
				emails: ["john@miro.com"]
			};
			const form1 = EmailsEditor({ container, ...options1 });
			
			/* user can create multiple form by calling
					const form2 = EmailsEditor({ container, ...options2 });
					const form3 = EmailsEditor({ container, ...options3 });
			*/
			</script>
	![enter image description here](https://raw.githubusercontent.com/ethan-cao/Assignment_Miro/master/public/example.png)

- Feature
	1.Email block should be created by pressing Enter, comma, or by losing focus on the input field. Any string can be converted to a block. A Block can be deleted.
	2. Email editor block’s width must depend on the parent container’s width. If parent width changes, emails should be redistributed by rows.
	3. If there are a lot of emails in the editor, the user should be able to scroll this block.
	4. Emails, pasted via ctrl+v/cmd+v should be split and converted into several blocks. For example, string “ivan@mail.ru, max@mail.ru” should be converted into 2 email blocks.	
	5. Invalid emails should be converted into blocks with a red underline.
	6. By clicking "Add email" button a random email should be added to the list.
	7. By clicking the "Get emails count" button a user should see an alert with valid emails count.

- API	
	1. getEmails()     
		`form1.getEmails()` return ["john@miro.com"]
		
	2. setEmails()    
		`form1.getEmails(["email1", "emails"])` will display email1 and email2 as block in the editor
		
	3.	subscribe(callback)     
	user can subscribe to changes with a callback, in the following example, newly set emails ["afasdf", "asdfasdfasdf@asd.com"] will be printed out
	
	  form1.subscribe( emails => console.log(emails))
	  form1.setEmails(["afasdf", "asdfasdfasdf@asd.com"])
	
	
-   Built version:  [dist/emails-editor.js](https://github.com/ethan-cao/Assignment_Miro/blob/master/dist/emails-editor.js "emails-editor.js")
