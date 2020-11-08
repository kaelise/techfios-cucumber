package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.SetColorPage;
import util.BrowserFactory;

public class SetColorSteps {
	
	
	WebDriver driver;
	BrowserFactory browserfactory;
	SetColorPage setskybluecolor;

	@Given("^I am on techfios\\.com/test website$")
	public void i_am_on_techfios_com_test_website() {
		driver = BrowserFactory.launchBrowser();
		setskybluecolor = PageFactory.initElements(driver, SetColorPage.class);
	}

	@When("^I click on Set SkyBlue Background button;$")
	public void i_click_on_Set_SkyBlue_Background_button() {
		setskybluecolor.clickOnSkyBlueButton();
	}

	@Then("^the background color will change to sky blue;$")
	public void the_background_color_will_change_to_sky_blue() {
		setskybluecolor.assertSkyBlueColor();
	}

	@When("^I click on white Background button;$")
	public void i_click_on_white_Background_button() {
		setskybluecolor.clickOnWhiteButton();
	}

	@Then("^the background color will change to white;$")
	public void the_background_color_will_change_to_white(){
		setskybluecolor.assertWhiteColor();
	}
	@After
	public void tearDown() {
		BrowserFactory.tearDown();
	}

}
