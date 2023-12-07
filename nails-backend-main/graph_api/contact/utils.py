
def validate_phone_number(mobile_number):
    """
    Validating user given mobile number has valid length or not

    :param mobile_number: (integer) mobile number to validate
    :return: Exception
    """
    if mobile_number:
        if len(str(mobile_number)) != 10:
            raise Exception('Enter a valid mobile Number')
        if not str(mobile_number).isnumeric():
            raise Exception('Mobile Number should be Integer')
    else:
        raise Exception("Mobile Number Cannot be empty")
