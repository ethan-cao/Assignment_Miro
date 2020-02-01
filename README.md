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
	![enter image description here](https://raw.githubusercontent.com/ethan-cao/Assignment_Miro/master/pics/example.png)

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
