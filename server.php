<html>
	<body>
		<?php
		$postdata=file_get_contents("php://input");
		$request=json_decode($postdata);
		$email=$request->contact_email;
		$phone=$request->contact_phone;
		$name=$request->contact_name;
		$message=$request->contact_message;
		$message=wordwrap($message,70,"\n");
		//Email headers
		$recipients=$email;
		$headers="yair@bgu.ac.il"."\r\n";
		$subject='Dr. Gortzak site Contact Us Message'."\n";
		$body='User Name: '.$name."\n".'User Phone: '.$phone."\n".'User Email: '.$email."\n".'Message content:'.$message;
		//Send mail
		//if(mail("elannoy@gmail.com" ,$subject,$body,$headers)) {
		//if(mail($email ,$subject,$body,$headers)) {
		if(mail("yair@bgu.ac.il, elannoy@gmail.com" ,$subject,$body,$headers)) {
			echo("
			<p>
			Message successfully sent!
			</p>
			"
		);
		} else {
		echo("<p>Message delivery failed...</p>");
		}
		#mail($email,$subject,$body,$headers);
		$data['success']=true;
		$data['message']='Success!';
		// return all our data to an AJAX call
		echo json_encode($data);
		?>
	</body>
</html>
