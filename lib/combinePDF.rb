require 'combine_pdf'
p (CombinePDF.load("pdfs/LineItem3.pdf") << CombinePDF.load("pdfs/inside.pdf")).save("example.pdf")
