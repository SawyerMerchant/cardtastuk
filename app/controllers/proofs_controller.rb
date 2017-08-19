# include "ActionView::Helpers::AssetTagHelper"
class ProofsController < ApplicationController
  def show
    @proof = Proof.find(params[:id])
    layout "landscape" if proof.line_item.card.orientation == "landscape" else layout "portrait"
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "proof_file_name", :page_height => '10.25in', :page_width => '7.25in'  # Excluding ".pdf" extension.
      end
    end
  end


end
