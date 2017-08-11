# include "ActionView::Helpers::AssetTagHelper"
class ProofsController < ApplicationController
  def show
    @proof = Proof.find(params[:id])
    respond_to do |format|
      format.html
    end
  end
end
