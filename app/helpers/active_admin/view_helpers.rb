module ActiveAdmin::ViewHelpers

  def call_to_action
    if current_admin_user.role == "member"
      "Add a list of email addresses and names to send out personalized email invitations."
    elsif current_admin_user.role == "leader"
      "Add the names and email addresses of #{current_admin_user.organization}'s members to email out invitations to join the fundraising effort."
  end

end
