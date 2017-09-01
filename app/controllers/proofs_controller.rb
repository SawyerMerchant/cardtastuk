# include "ActionView::Helpers::AssetTagHelper"
class ProofsController < ApplicationController
  layout :set_layout
  # def new
  #   @proof = Proof.new(line_item_id: params[:line_item_id])
  #   if @proof.save
  #     respond_to do |format|
  #       format.html
  #       format.pdf do
  #         render pdf: "proof_file_name",
  #                page_height: '10.25in',
  #                page_width: '7.25in',
  #                window_status: ""
  #       end
  #     end
  #   end
  # end

  def create

  end

  def show
    @proof = Proof.find(params[:id])
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "proof_file_name",
               page_height: '10.25in',
               page_width: '7.25in',
               disable_javascript: !@proof.font_size.nil?
      end
    end
  end

  private

  def set_layout
    "proof"
  end


end
